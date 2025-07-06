'use client'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

import { useMatches } from 'kbar'
import { Fragment } from 'react'

export function KBarCommand() {
  const { results } = useMatches()

  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {results.map((item, index) => {
          if (typeof item === 'string') {
            return (
              <Fragment key={`section-${index}`}>
                {index !== 0 && <CommandSeparator />}
                <CommandGroup heading={item} />
              </Fragment>
            )
          }

          return (
            <CommandItem
              key={item.id}
              onSelect={() => {
                if (typeof item.command === 'function') {
                  item.perform()
                }
              }}
              className="relative"
            >
              <span>{item.name}</span>

              {Array.isArray(item.shortcut) && item.shortcut.length > 0 && (
                <kbd className="bg-muted pointer-events-none absolute top-1/2 right-[0.5rem] -translate-y-1/2 hidden h-6 items-center justify-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
                  {item.shortcut.map((key, i) => (
                    <span key={i} className="flex items-center gap-0.5">
                      {/* <span className="text-xs">⌘ </span>
                      <span className="text-xs"> {key}</span> */}
                      <span>⌘&nbsp;{key}</span>

                    </span>
                  ))}
                </kbd>

              )}
            </CommandItem>
          )
        })}
      </CommandList>
    </Command>
  )
}

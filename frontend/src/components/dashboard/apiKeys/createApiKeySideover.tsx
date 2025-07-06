import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { parseError } from "@/utils/errors";
import { Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import GenericButton from "@/components/ui/button/genericButton";
import { createApiKey } from "@/queries/apiAuth/useGetAPIKeys";
import { ApiKeyBase } from "@/queries/apiAuth/types";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ICreateAPIKeyProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  refetch?: () => void;
}
import { Input } from "@/components/ui/input";

export function CreateApiKeySideover(props: ICreateAPIKeyProps) {
  const { isOpen, setIsOpen, refetch } = props;
  const [title, setTitle] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiKeyDetail, setApiKeyDetail] = useState<ApiKeyBase>();
  const { toast } = useToast();

  async function handleClick() {
    setIsLoading(true);
    try {
      const response = await createApiKey({
        title: title,
      });
      if (response) {
        setApiKeyDetail(response);
        toast({
          title: "Success",
          description: "API Key Created",
        });
        await refetch?.();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: parseError(error),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      setTitle("");
    }
    if (!isOpen) {
      setApiKeyDetail(undefined);
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full lg:w-1/3">
        <SheetHeader>
          <SheetTitle>Create a new API Key</SheetTitle>
        </SheetHeader>
        
        <div className="mx-2.5 mt-10">
          {apiKeyDetail ? (
            <div>
              <p className="font-bold">API Key Title:</p>
              <p>{apiKeyDetail.title}</p>
              <p className="font-bold mt-4">API Key:</p>
              <div className="flex items-center">
                <p className="mr-2">{apiKeyDetail.key}</p>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    navigator.clipboard.writeText(apiKeyDetail.key);
                    toast({
                      title: "Success",
                      description: "API Key copied to clipboard",
                    });
                  }}
                  className=""
                >
                  <Copy />
                </Button>
              </div>
              <p className="text-red-500 mt-4">
                You can see the key only once. Please copy it now.
              </p>
            </div>
          ) : (
            <>
              <div className="mx-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Title
                  </label>
                  <Input
                    id="title"
                    type="title"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue=""
                    required
                    className=""
                  />
                </div>

                <GenericButton
                  onClick={handleClick}
                  isLoading={isLoading}
                >
                  Create
                </GenericButton>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

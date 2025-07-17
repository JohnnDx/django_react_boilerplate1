"use client";

import { useState, useEffect } from "react";
import {
  FrownIcon,
  AnnoyedIcon,
  MehIcon,
  SmileIcon,
  LaughIcon,
  SendHorizontalIcon,
  CircleFadingArrowUp,
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";
import { useFeedbackModalContext } from "@/contexts/ModalProvider";
import { useSubmitFeedbackFormWithMutation } from "@/queries/communication/SubmitFeedback";
import { parseError } from "@/utils/errors";

export default function FeedbackModal() {
  const { isFeedbackOpen, closeFeedbackModal } = useFeedbackModalContext();

  const [feedbackScore, setFeedbackScore] = useState(0);
  const [feedbackSuggestion, setFeedbackSuggestion] = useState("");
  const [feedbackOtherSuggestions, setFeedbackOtherSuggestions] = useState("");

  const feedbackSuggestions = [
    "Customer Support",
    "Template Structure",
    "UI Design",
    "Overall Service",
  ];

  const icons = [FrownIcon, AnnoyedIcon, MehIcon, SmileIcon, LaughIcon];

  useEffect(() => {
    const handlePopstate = () => {
      if (isFeedbackOpen) closeFeedbackModal();
    };
    window.addEventListener("popstate", handlePopstate);
    return () => window.removeEventListener("popstate", handlePopstate);
  }, [isFeedbackOpen, closeFeedbackModal]);

  const { mutate: submitFeedbackForm } = useSubmitFeedbackFormWithMutation({
    onSuccess: (message: string) => {
      toast.success("Feedback submitted successfully!", {
        description: message,
      });
      resetForm();
      closeFeedbackModal();
    },
    onError: (error: any) => {
      toast.error("Failed to submit feedback.", {
        description: parseError(error),
      });
      resetForm();
      closeFeedbackModal();
    },
  });

  const resetForm = () => {
    setFeedbackScore(0);
    setFeedbackSuggestion("");
    setFeedbackOtherSuggestions("");
  };

  const handleSubmit = () => {
    if (!feedbackScore) {
      toast.error("Please choose a feedback reaction.");
      return;
    }

    // toast.loading("Sending your feedback...");

    submitFeedbackForm({
      feedback_score: feedbackScore,
      feedback_suggestion: feedbackSuggestion,
      feedback_other_suggestions: feedbackOtherSuggestions,
    });
  };

  return (
    <AlertDialog open={isFeedbackOpen} onOpenChange={closeFeedbackModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mx-auto sm:mx-0 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <CircleFadingArrowUp className="h-[20px] w-[20px] text-primary" />
          </div>

          <AlertDialogTitle className="text-2xl font-bold tracking-tight">
            Share your thoughts with us
          </AlertDialogTitle>

          <AlertDialogDescription className="!mt-2 text-[15px]">
            What do you think about our platform so far? Your feedback helps us grow.
          </AlertDialogDescription>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Select a category</p>
              <div className="flex flex-wrap gap-2">
                {feedbackSuggestions.map((suggestion, index) => (
                  <Badge
                    key={index}
                    variant={feedbackSuggestion === suggestion ? "default" : "outline"}
                    onClick={() => setFeedbackSuggestion(suggestion)}
                    className="cursor-pointer rounded-lg px-3 py-1 text-sm"
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Other suggestions</p>
              <Textarea
                placeholder="Your message here..."
                value={feedbackOtherSuggestions}
                onChange={(e) => setFeedbackOtherSuggestions(e.target.value)}
              />
            </div>

            <div className="text-sm font-medium text-center">How do you feel?</div>
            <div className="flex justify-center gap-4 pt-2">
              {icons.map((Icon, index) => (
                <Icon
                  key={index}
                  onClick={() => setFeedbackScore(index + 1)}
                  className={`h-8 w-8 cursor-pointer transition-colors ${
                    feedbackScore === index + 1
                      ? "text-pink-600"
                      : "text-muted-foreground hover:text-pink-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-6 flex justify-between">
          <Button variant="ghost" onClick={closeFeedbackModal}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Submit <SendHorizontalIcon className="ml-2 h-4 w-4" />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

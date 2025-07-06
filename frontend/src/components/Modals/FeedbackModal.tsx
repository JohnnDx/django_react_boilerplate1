"use client";

import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { SendHorizontalIcon } from "lucide-react";
import { useFeedbackModalContext } from "../../contexts/ModalProvider";
import {
    AnnoyedIcon,
    FrownIcon,
    LaughIcon,
    MehIcon,
    SmileIcon,
} from "lucide-react";
import { useSubmitFeedbackFormWithMutation } from "@/queries/communication/SubmitFeedback";
import { parseError } from "../../utils/errors";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "../ui/badge";

export default function FeedbackModal() {
    const [feedbackScore, setFeedbackScore] = useState(0);
    const [feedbackSuggestion, setFeedbackSuggestion] = useState("");
    const [feedbackOtherSuggestions, setFeedbackOtherSuggestions] = useState("");

    const { toast } = useToast();
    const icons = [FrownIcon, AnnoyedIcon, MehIcon, SmileIcon, LaughIcon];

    const { isFeedbackOpen, closeFeedbackModal } = useFeedbackModalContext();
    const feedbackSuggestions = [
        "Customer Support",
        "Template structure",
        "UI Design",
        "Overall Service",
    ];

    useEffect(() => {
        const handlePopstate = () => {
            if (isFeedbackOpen) {
                closeFeedbackModal();
            }
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, [isFeedbackOpen, closeFeedbackModal]);

    const { mutate: submitFeedbackForm } = useSubmitFeedbackFormWithMutation({
        onSuccess: async (message) => {
            toast({
                title: "Success",
                description: message,
            });
            closeFeedbackModal();
            setFeedbackScore(0);
            setFeedbackOtherSuggestions("");
            setFeedbackSuggestion("");
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: parseError(error),
            });
            closeFeedbackModal();
            setFeedbackScore(0);
            setFeedbackOtherSuggestions("");
            setFeedbackSuggestion("");
        },
    });

    const handleSubmit = () => {
        if (!feedbackScore) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please Choose a feedback reaction",
            });
            return;
        }
        submitFeedbackForm({
            feedback_score: feedbackScore,
            feedback_suggestion: feedbackSuggestion,
            feedback_other_suggestions: feedbackOtherSuggestions,
        });
    };

    return (
        <Dialog open={isFeedbackOpen} onOpenChange={closeFeedbackModal}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle>Feedback Form</DialogTitle>
                </DialogHeader>

                <div className="p-5">
                    <p className="mb-6 text-md font-medium">
                        Tell us what we can improve?
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 ">
                        {feedbackSuggestions?.map((suggestion, index) => (
                            <Badge
                                key={index}
                                variant={feedbackSuggestion === suggestion ? "default" : "outline"}
                                onClick={() => setFeedbackSuggestion(suggestion)}
                                className="cursor-pointer px-3 py-3 rounded-xl"
                            >
                                {suggestion}
                            </Badge>
                        ))}
                    </div>
                    <p className="mb-6 text-md font-medium">Other Suggestions</p>
                    <Textarea
                        id="suggestion"
                        name="suggestion"
                        rows={6}
                        value={feedbackOtherSuggestions}
                        onChange={(e) => setFeedbackOtherSuggestions(e.target.value)}
                        placeholder="Write suggestion"
                        className="border border-gray-300 block w-full rounded-lg px-3 py-2 text-sm leading-5 placeholder-gray-400"
                    />
                </div>
                <div className="flex justify-center space-x-4 mb-3 border border-gray-200 w-[90%] mx-auto py-2 rounded-xl">
                    {icons.map((Icon, index) => (
                        <Icon
                            onClick={() => setFeedbackScore(index + 1)}
                            key={index}
                            className={`h-10 w-7 hover:cursor-pointer hover:text-pink-600 font-light ${index == feedbackScore - 1 ? "text-pink-600" : "text-pink-200"
                                }`}
                        />
                    ))}
                </div>
                <DialogFooter className="sm:justify-between">
                    <Button
                        onClick={closeFeedbackModal}
                        type="button"
                        variant="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        type="button"
                        variant="default"
                    >
                        Submit <SendHorizontalIcon className="h-5 w-5 ml-2" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
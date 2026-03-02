import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useId } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	NativeSelect,
	NativeSelectOption,
} from "@/components/ui/native-select";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export const Route = createFileRoute("/settings/")({
	component: Settings,
});

function Settings() {
	return (
		<div className="h-full flex justify-center items-center">
			<Card className="w-full max-w-sm flex">
				<CardHeader>
					<CardTitle>Application Configuration</CardTitle>
					<CardDescription>
						Change settings below to suit your device's specification
					</CardDescription>
					<CardAction>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="flex gap-1 items-center justify-center">
									<Info className="size-4" />
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>App needs to be restarted for changes to have effects</p>
							</TooltipContent>
						</Tooltip>
					</CardAction>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<div className="flex items-center justify-between">
									<Label htmlFor="api-key">Groq API Key</Label>
									<Label className="text-red-400">*required</Label>
								</div>
								<Input id={useId()} type="password" required />
							</div>
							<div className="flex items-center justify-between">
								<div className="grid gap-2">
									<div className="flex items-center justify-between">
										<Label htmlFor="stt">STT</Label>
									</div>
									<NativeSelect>
										<NativeSelectOption value="stt-gpu">GPU</NativeSelectOption>
										<NativeSelectOption value="stt-cpu">CPU</NativeSelectOption>
									</NativeSelect>
								</div>
								<div className="grid gap-2">
									<div className="flex items-center justify-between">
										<Label htmlFor="ocr">OCR</Label>
									</div>
									<NativeSelect>
										<NativeSelectOption value="ocr-gpu">GPU</NativeSelectOption>
										<NativeSelectOption value="ocr-cpu">CPU</NativeSelectOption>
									</NativeSelect>
								</div>
								<div className="grid gap-2">
									<div className="flex items-center justify-between">
										<Label htmlFor="stt-size">STT Size</Label>
									</div>
									<NativeSelect>
										<NativeSelectOption value="stt-tiny">
											Tiny
										</NativeSelectOption>
										<NativeSelectOption value="stt-base">
											Base
										</NativeSelectOption>
										<NativeSelectOption value="stt-small">
											Small
										</NativeSelectOption>
									</NativeSelect>
								</div>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2 items-end">
					{/* 
            No changes --> do nothing 
					  Changes --> restart backend with latest config 
          */}
					<Button type="submit" className="w-full cursor-pointer">
						Save Settings
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

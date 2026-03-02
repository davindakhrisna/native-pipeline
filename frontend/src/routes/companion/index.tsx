import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/companion/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="h-full grid grid-cols-1 sm:grid-cols-2">
			<div className="bg-yellow-50">hi</div>
			<div className="bg-blue-50">hi</div>
		</div>
	);
}

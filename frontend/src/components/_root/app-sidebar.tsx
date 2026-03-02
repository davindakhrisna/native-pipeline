import {
	Blocks,
	Book,
	Bot,
	CogIcon,
	CreditCard,
	Settings,
	SquareTerminal,
} from "lucide-react";

import { NavMain } from "#/components/_root/nav-main";
import { NavSecondary } from "#/components/_root/nav-secondary";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "#/components/ui/sidebar";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Screen Tunnel",
			url: "/",
			icon: SquareTerminal,
			isActive: true,
		},
		{
			title: "Session Management",
			url: "/session",
			icon: CreditCard,
		},
		{
			title: "Artifacts Collection",
			url: "/artifact",
			icon: Blocks,
		},
		{
			title: "Companion",
			url: "/companion",
			icon: Bot,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/settings",
			icon: CogIcon,
		},
		{
			title: "Documentation",
			url: "/documentation",
			icon: Book,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Settings className="size-5" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Cognisia Synapse</span>
									<span className="truncate text-xs">
										Realtime Screen Pipeline
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
		</Sidebar>
	);
}

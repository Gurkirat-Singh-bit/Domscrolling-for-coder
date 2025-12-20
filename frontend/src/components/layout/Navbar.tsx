'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center space-x-4 justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-light tracking-tight text-white">
            Domscrolling
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/5">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black/95 backdrop-blur-lg border border-white/10">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/5 to-white/10 p-6 no-underline outline-none focus:shadow-md hover:from-white/10 hover:to-white/15 transition-all"
                          href="#curated-feed"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Curated Feed
                          </div>
                          <p className="text-sm leading-tight text-white/60">
                            Only the best coding content, filtered for quality
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#short-form" title="Short-form learning">
                      Bite-sized coding tutorials and tips
                    </ListItem>
                    <ListItem href="#topics" title="Topic filters">
                      Focus on languages and frameworks you care about
                    </ListItem>
                    <ListItem href="#creators" title="Top creators">
                      Follow the best educators in tech
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/80 hover:text-white hover:bg-white/5")}
                  href="#how-it-works"
                >
                  How it works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white/80 hover:text-white hover:bg-white/5")}
                  href="#about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-3">
          <form className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/40" />
            <Input 
              type="search" 
              placeholder="Search topics..." 
              className="pl-8 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20 transition-all" 
            />
          </form>
          <Button 
            asChild
            className="bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all"
          >
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/60">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

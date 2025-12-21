/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file Navbar.tsx
 * @file Top navigation bar component used across the site.
 */

'use client';

import { Button } from "@/components/ui/button";
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
import { Github } from "lucide-react";
import Link from "next/link";
import * as React from "react";

/**
 * Top navigation bar which includes links, the brand, and action buttons.
 * @returns {JSX.Element} The navigation bar element.
 */
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
                <NavigationMenuTrigger className="nav-trigger bg-transparent text-white/80 hover:text-white">
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
                  className={cn(navigationMenuTriggerStyle(), "nav-trigger bg-transparent text-white/80 hover:text-white")}
                  href="#how-it-works"
                >
                  How it works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "nav-trigger bg-transparent text-white/80 hover:text-white")}
                  href="#about"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-3">
          <Link 
            href="https://github.com/Gurkirat-Singh-bit/Domscrolling-for-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Button 
            asChild
            className="bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-all"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

/**
 * List item used inside the navigation menu.
 * @param {object} props - Component props.
 * @param {string} [props.className] - Additional classes to apply to the item.
 * @param {string} props.title - Title text for the menu item.
 * @param {React.ReactNode} props.children - Description or content for the item.
 * @returns {JSX.Element} The navigation list item.
 */
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

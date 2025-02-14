"use client";

import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Menu, ShoppingBagIcon, X } from "lucide-react";
import { Button } from "../ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Everyday",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Events",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Vacation",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Weddings",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Works",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
];

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav className="">
      <div className="hidden lg:block">
        <NavigationMenu className="flex flex-row p-6 justify-between">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link href="/" legacyBehavior passHref>
                <span className="text-sm font-bold cursor-pointer mr-10">
                  LOGO SADEWO
                </span>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>HOW IT WORKS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-80 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <span className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/docs" title="BECOME MEMBER">
                      Become a member to access the latest updates and access to
                      the community.
                    </ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="RESERVE A RENTAL"
                    >
                      Rent a dress for your wedding.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="BUY WHAT YOU LOVE"
                    >
                      Buy what you love.
                    </ListItem>
                  </span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>OCCASIONS</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex p-4 gap-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-80 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <span className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>CLOTHING</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex p-4 gap-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-80 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <span className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>DESIGNER</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex p-4 gap-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-80 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <span className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>BUY</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex p-4 gap-3">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-80 w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <span className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  🎁 GIFT CARD
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="flex gap-5 items-center">
            <ul className="flex gap-3 items-center">
              <Link href="/signin" className="font-bold">
                Sign In
              </Link>
              <Link href="/whistlist">
                <Heart className="w-4" />
              </Link>
              <Link href="/">
                <ShoppingBagIcon className="w-4" />
              </Link>
            </ul>
            <Link href="/member">
              <Button className="flex flex-col items-center">
                <span className="font-bold">Become Member</span>
              </Button>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="lg:hidden flex justify-between items-center py-3 px-4 ">
        <Link href="/" className="text-lg font-bold">
          LOGO SADEWO
        </Link>
        <button onClick={toggleMenu} className="text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-700"
        >
          <X size={24} />
        </button>
        <ul className="mt-16 p-6 space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={""}>go to</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
        <ul className="mt-6 p-6 space-y-4 flex flex-col items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-5"
          >
            <AccordionItem value="item-1">
              <Link href="/signin" className="font-bold">
                Sign In
              </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
              <Link href="/whistlist" className="flex gap-2">
                <Heart className="w-4" /> Wishlist
              </Link>
            </AccordionItem>
            <AccordionItem value="item-3">
              <Link href="/" className="flex gap-2">
                <ShoppingBagIcon className="w-4" /> Cart
              </Link>
            </AccordionItem>
            <Link href="/member">
              <Button className="flex flex-col items-center">
                <span className="font-bold">Become Member</span>
              </Button>
            </Link>
          </Accordion>
        </ul>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

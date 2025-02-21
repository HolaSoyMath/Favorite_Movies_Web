import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Link } from 'lucide-react';

export function MenuBar() {
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='#'>
                        <NavigationMenuLink>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
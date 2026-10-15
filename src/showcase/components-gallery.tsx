import { useState } from 'react'
import { ChevronDownIcon, InfoIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Section } from './section'

const plans = [
  { label: 'Starter', value: 'starter' },
  { label: 'Plus', value: 'plus' },
  { label: 'Premium', value: 'premium' },
]

const Tile = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap items-center gap-150">{children}</CardContent>
  </Card>
)

export const ComponentsGallery = () => {
  const [notifications, setNotifications] = useState(true)

  return (
    <Section id="components" title="Components">
      <div className="grid gap-300 md:grid-cols-2">
        <Tile title="Button">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Tile>

        <Tile title="Badge">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-successContainer text-onSuccessContainer">Wayfinder success</Badge>
          <Badge className="bg-warnContainer text-onWarnContainer">Wayfinder warn</Badge>
        </Tile>

        <Tile title="Form controls">
          <div className="flex w-full flex-col gap-200">
            <div className="flex flex-col gap-75">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@business.com" />
            </div>
            <div className="flex flex-col gap-75">
              <Label>Plan</Label>
              <Select items={plans} defaultValue="plus">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {plans.map((plan) => (
                    <SelectItem key={plan.value} value={plan.value}>
                      {plan.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Label className="gap-100">
              <Checkbox defaultChecked /> Accept terms
            </Label>
            <Label className="gap-100">
              <Switch checked={notifications} onCheckedChange={setNotifications} /> Notifications{' '}
              {notifications ? 'on' : 'off'}
            </Label>
          </div>
        </Tile>

        <Tile title="Tabs">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="body2 text-onSurfaceVariant">
              Business health at a glance.
            </TabsContent>
            <TabsContent value="activity" className="body2 text-onSurfaceVariant">
              Recent account activity.
            </TabsContent>
            <TabsContent value="settings" className="body2 text-onSurfaceVariant">
              Manage preferences.
            </TabsContent>
          </Tabs>
        </Tile>

        <Tile title="Overlays">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm action</DialogTitle>
                <DialogDescription>This dialog uses popover and onSurface tokens.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
                <DialogClose render={<Button />}>Confirm</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>Sheet</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Side sheet</SheetTitle>
                <SheetDescription>Slides in from the right.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>Popover</PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Popover</PopoverTitle>
                <PopoverDescription>Anchored floating content.</PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Menu <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="More info" />}>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent>Tooltip content</TooltipContent>
          </Tooltip>

          <Button variant="secondary" onClick={() => toast.success('Saved', { description: 'Your changes are live.' })}>
            Toast
          </Button>
        </Tile>

        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>Header, action, content, and footer slots.</CardDescription>
            <CardAction>
              <Badge variant="secondary">New</Badge>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-150">
            <p className="body2 text-onSurfaceVariant">Cards use surfaceContainer and onSurface tokens.</p>
            <Separator />
            <p className="caption1 text-onSurfaceVariant">Separator above uses outlineVariant.</p>
          </CardContent>
          <CardFooter className="gap-100">
            <Button size="sm">Continue</Button>
            <Button size="sm" variant="ghost">
              Dismiss
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Section>
  )
}

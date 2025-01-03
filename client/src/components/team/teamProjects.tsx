'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { FolderPlus } from 'lucide-react'
import ProjectCard from '@/components/team/projectCard'

const projects = [
  { id: 1, title: 'Website Redesign', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '2 hours ago', members: 4 },
  { id: 2, title: 'Logo Design', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '1 day ago', members: 2 },
  { id: 3, title: 'Mobile App UI', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '3 days ago', members: 3 },
  { id: 4, title: 'Brand Guidelines', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '1 week ago', members: 5 },
  { id: 5, title: 'Social Media Campaign', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '2 weeks ago', members: 3 },
  { id: 6, title: 'Product Packaging', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '3 weeks ago', members: 2 },
  { id: 7, title: 'Annual Report Design', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '1 month ago', members: 4 },
  { id: 8, title: 'E-commerce Website', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '1 month ago', members: 5 },
  { id: 9, title: 'App Icon Design', thumbnail: '/placeholder.svg?height=100&width=200', lastEdited: '2 months ago', members: 2 },
]

export default function TeamProjects({ teamId, currentPage }: { teamId: string, currentPage: number }) {
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false)
  const projectsPerPage = 6
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const paginatedProjects = projects.slice(startIndex, endIndex)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Team Projects</CardTitle>
          <Dialog open={isAddProjectOpen} onOpenChange={setIsAddProjectOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <FolderPlus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>
                  Enter the name of the new project you want to add to this team.
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="Enter project name" />
              <DialogFooter>
                <Button type="submit">Add Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <CardDescription>Manage your team projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


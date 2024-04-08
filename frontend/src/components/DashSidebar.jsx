import React from 'react'
import {Sidebar} from "flowbite-react"
import {Link} from "react-router-dom"
import {HiUser , HiArrowSmRight, HiDocumentText, HiOutlineUserGroup} from "react-icons/hi";
export default function DashSidebar({tab}) {
  return (
    <Sidebar className='side w-full md:w-64'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
                <Link to="/dashboard?tab=profile" >
                    <Sidebar.Item active={tab === "profile"} icon={HiUser} label={"User"} labelColor = "dark" as="div">
                        Profile
                    </Sidebar.Item>
                </Link>
                {localStorage.getItem("isAdmin") && 
                <Link to="/dashboard?tab=posts">
                    <Sidebar.Item active={tab === "posts"} icon={HiDocumentText} as="div">
                        Posts
                    </Sidebar.Item>
                </Link>
                }
                {localStorage.getItem("isAdmin") && 
                <Link to="/dashboard?tab=users">
                    <Sidebar.Item active={tab === "users"} icon={HiOutlineUserGroup} as="div">
                        Users
                    </Sidebar.Item>
                </Link>
                }
                {localStorage.getItem("isAdmin") && 
                <Link to="/dashboard?tab=comments">
                    <Sidebar.Item active={tab === "comments"} icon={HiOutlineUserGroup} as="div">
                        Comments
                    </Sidebar.Item>
                </Link>
                }
                <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

import React from 'react'

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "TaskFlow",
            description: "Aplikasi manajemen tugas untuk mengatur pekerjaan harian.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
            status: "Completed",
        },
        {
            id: 2,
            name: "ShopEase",
            description: "Website e-commerce sederhana dengan fitur keranjang belanja.",
            techStack: ["React", "Node.js", "Express.js", "MySQL"],
            status: "In Progress",
        },
        {
            id: 3,
            name: "MoneyTrack",
            description: "Aplikasi pencatatan pemasukan dan pengeluaran keuangan.",
            techStack: ["Next.js", "TypeScript", "PostgreSQL"],
            status: "Completed",
        },
        {
            id: 4,
            name: "MovieHub",
            description: "Platform untuk mencari dan melihat informasi film.",
            techStack: ["React", "JavaScript", "Tailwind CSS"],
            status: "Completed",
        },
        {
            id: 5,
            name: "DevBlog",
            description: "Blog sederhana untuk berbagi artikel seputar programming.",
            techStack: ["Next.js", "Tailwind CSS"],
            status: "In Progress",
        },
        {
            id: 6,
            name: "InventoryPro",
            description: "Sistem inventory untuk mengelola stok barang.",
            techStack: ["Node.js", "Express.js", "MySQL"],
            status: "Planning",
        },
    ];


    return (
        <div className='flex p-5 bg-[#131218] gap-5 flex-wrap w-full' id='projects'>
            {projects.map((project) => (
                <div key={project.id} className='bg-[#2B2D3A] w-full p-5 text-justify rounded-2xl lg:w-2xl lg:grow text-white shadow-lg/20 shadow-[#FFD401]'>
                    <h2 className='text-2xl font-extrabold text-[#FFD401]'>{project.name}</h2>
                    <p>{project.description}</p>
                    <p className='font-bold'>{project.status}</p>

                    {project.techStack.map((tech) => (
                        <span key={tech}> {tech} |</span>
                    ))}
                </div>   
            ))}
        </div>
    )
}

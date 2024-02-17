import { useRouter } from "next/router";

const DeveloperDetailspage = () => {

    const devList = [
        { id: 1, name: 'Debasish Kisan', role: 'Senior Developer' },
        { id: 2, name: 'Dk', role: 'Frontend Developer' },
        { id: 3, name: 'Debasish', role: 'Backend Developer' }
    ]

    const router = useRouter();
    const id = router.query.id

    const devIdx = devList.findIndex(d => d.id == id)
    const dev = devList[devIdx]

    return (
        <>
            {dev && <div>
                <h1>{dev.name}</h1>
                <h3>{dev.role}</h3>
            </div>}
            {!dev && <h1>Developer doesn't exist</h1>}
        </>
    )
}

export default DeveloperDetailspage;
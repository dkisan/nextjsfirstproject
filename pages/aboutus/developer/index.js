import Link from "next/link";

const Developerpage = () => {
    const devList = [
        { id: 1, name: 'Debasish Kisan' },
        { id: 2, name: 'Dk' },
        { id: 3, name: 'Debasish' }
    ]


    return (
        <div>
            {
                devList.map(d => {
                    return <h2 key={d.id}><Link href={`/aboutus/developer/${d.id}`}>{d.name}</Link></h2>
                })
            }
        </div>
    )
}

export default Developerpage;
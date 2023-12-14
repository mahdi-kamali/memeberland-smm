import Image from "next/image";

export default function page() {
    return (
        <main className="user-dashboard">

            <div className="shapes">
                <div className="shape-1">
                    <Image
                        src="/images/user/dashboard/1.png"
                        fill
                        alt="" />
                </div>
            </div>

        </main>
    )
}

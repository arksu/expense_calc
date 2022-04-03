import NavBar from "@/components/NavBar";

export default function MainLayout (props : any) {
    return (
        <>
            <NavBar></NavBar>
            <div>
                {props.children}
            </div>
        </>
    )
}
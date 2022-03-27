import NavBar from "@/components/NavBar";

export default function MainContent (props : any) {
    return (
        <>
            <NavBar></NavBar>
            <div>
                {props.children}
            </div>
        </>
    )
}
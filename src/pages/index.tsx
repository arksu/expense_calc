import MainLayout from "@/components/MainLayout";
import {Button} from "antd";

export default function HomePage() {
    return (
        <MainLayout>
            <div>
                main page
                <Button type={"primary"}>press</Button>
            </div>
        </MainLayout>
    )
}

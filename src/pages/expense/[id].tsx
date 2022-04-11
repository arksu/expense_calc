import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

interface ExpenseProps {
    id: string
}

interface ExpenseParams extends ParsedUrlQuery {
    id: string
}

/**
 * информация о конкретном расходе средств
 * @param id
 * @constructor
 */
export default function Expense({id}: ExpenseProps) {
    return (
        <MainLayout>
            <Link href={"/expenses"}><a>Back to list</a></Link>
            <p>expense id: {id}</p>

        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<ExpenseProps, ExpenseParams> = async (context) => {

    try {
        if (context.params?.id == "3") {
            throw Error("some error")
        }
        return {
            props: {
                id: context.params?.id ?? "0"
            }
        }
    } catch (e) {
        throw e
    }

}
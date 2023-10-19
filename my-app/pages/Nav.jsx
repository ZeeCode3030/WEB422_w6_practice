import Link from "next/link"

export default function Nav(){

    return (
        <>
        <p>
        <Link href={'/'}>HOME</Link> | 
        <Link href={'/about.js'}>ABOUT</Link> | <Link href={'/dashboard'}> DASHBOARD </Link>
        </p>
       </>
    )

}
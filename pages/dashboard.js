import Link from "next/link";
import post from '../post.json'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                Hello
                <Link href='/'>
                    <a>Home</a>

                </Link>
                <ul>
                    {
                        Object.entries(post).map((value, index) => {
                            return <li key={index}>
                                <Link href='dashboard/[id]' as={'/dashboard/'+value[0]}>
                                    <a>
                                        {value[1].title}
                                    </a>

                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
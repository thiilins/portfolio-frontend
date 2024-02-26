import Main from '@views/Home/Main'
import Error from 'next/error'
import { notFound } from 'next/navigation'
interface IProps {
  title?: string
}
export default function Pagina({ params }: { params: { projectId: string } }) {
  if (params?.projectId === '1') {
    notFound()
  }
  return <div>Framework: {params.projectId}</div>
}

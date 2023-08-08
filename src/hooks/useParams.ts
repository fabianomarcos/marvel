import { useRouter } from "next/router";

export function useParams(param: string) {
  const router = useRouter()
  return router.query[param]
}
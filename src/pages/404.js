import React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        ページが見つかりませんでした。
        <Link to="/">トップへ戻る</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

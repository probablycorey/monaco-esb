import React from "react"
import * as monaco from "monaco-editor"

export default class Gist extends React.Component {
  componentDidMount() {
    if (!this.container) throw new Error("THERE IS NO CONTAINER")

    monaco.editor.create(this.container, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n"
      ),
      language: "javascript"
    })
  }

  render() {
    return (
      <div ref={ref => (this.container = ref)}>
        Welcome to gist
      </div>
    )
  }
}

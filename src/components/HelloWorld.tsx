import React from 'react'

export interface IHelloWorld {
  text: string
}

export const HelloWorld = ({ text }: IHelloWorld) => {
  return <div className="text">This is test text: {text}</div>
}

import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { basic } from "../items"
import styled from "styled-components"

const Main = styled.main`
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 28px;
`

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 100;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  list-style-type: none;
`

const ListItem = styled.li<{checked: boolean}>`
  margin: 22px 0;
`

const Name = styled.span<{checked: boolean}>`
  font-size: 1.5rem;
  font-weight: 100;
  ${({checked}) => checked ? `text-decoration: line-through` : ``};
`

const Count = styled.span`
  font-size: 1.25rem;
  margin-left: 12px;
  color: burlywood;
  text-decoration: none;
`

const IndexPage: React.FC<PageProps> = () => {
  const [checked, setChecked] = React.useState<number[]>([])

  const toggle = (index: number) => {
    if (checked.includes(index)) {
      setChecked(checked.filter((item) => item !== index))
    } else {
      setChecked([...checked, index])
    }
  }

  console.log(checked);

  return (
    <Main>
      <Header>Vollkoffer</Header>
      <section>
        <List>
        {basic.map((item, index) => (
          <ListItem checked={checked.includes(index)} onClick={() => toggle(index)} key={index}>
            <Name checked={checked.includes(index)}>{item.name}</Name>
            <Count>{item.count}</Count>
          </ListItem>
        ))}
        </List>
      </section>
    </Main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vollkoffer</title>

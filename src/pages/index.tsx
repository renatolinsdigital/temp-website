import styled from 'styled-components'

const Title = styled.h1(({ theme }) => ({
  fontSize: '32px',
  fontFamily: theme.fontFamilies.body,
  color: theme.colors.secondary
}));

export default function Home() {
  return <Title>Renato Lins</Title>
}

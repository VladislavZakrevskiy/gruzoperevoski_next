import { FC } from 'react'
import { Flex, FlexProps } from '../Flex/Flex'

export const VStack: FC<FlexProps> = (props) => {
    return <Flex direction="column" {...props} />
}

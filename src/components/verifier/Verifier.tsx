import React from 'react'

import Check from '@/assets/icons/check.svg'
import XMark from '@/assets/icons/x_mark.svg'
import i18n from '@/locales'

import { Container, Text } from './Verifier.style'

interface VerifierProps {
  isValid: boolean
  text: string
}

/**
 * Verifier
 */
const Verifier = ({ isValid, text }: VerifierProps) => {
  return (
    <Container>
      {isValid ? (
        <Check
          width={18}
          height={13}
        />
      ) : (
        <XMark
          width={18}
          height={18}
        />
      )}
      <Text>{i18n.t(text)}</Text>
    </Container>
  )
}

export default Verifier

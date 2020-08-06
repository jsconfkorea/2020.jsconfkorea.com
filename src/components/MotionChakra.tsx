import {
  Box as CBox,
  Grid as CGrid,
  Heading as CHeading,
  Divider as CDivider,
  Image as CImage,
  Button as CButton,
  Link as CLink,
} from '@chakra-ui/core'
import { motion } from 'framer-motion'

export const Box = motion.custom(CBox)
export const Grid = motion.custom(CGrid)
export const Heading = motion.custom(CHeading)
export const Divider = motion.custom(CDivider)
export const Image = motion.custom(CImage)
export const Button = motion.custom(CButton)
export const A = motion.custom(CLink)

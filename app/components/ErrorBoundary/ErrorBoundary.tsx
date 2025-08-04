import { useErrorContext } from '../../context/Error'
import React, { ComponentProps } from 'react'
import { ErrorBoundaryRoot } from './ErrorBoundary.styles'

type ErrorBoundaryOwnProps = ComponentProps<typeof ErrorBoundaryRoot>
export type ErrorBoundaryProps = ErrorBoundaryOwnProps

export const ErrorBoundary = (_props: ErrorBoundaryProps) => {
  useErrorContext()

  // TODO: Handle individual errors
  return <ErrorBoundaryRoot>{_props.children}</ErrorBoundaryRoot>
}

ErrorBoundary.displayName = 'ErrorBoundary'

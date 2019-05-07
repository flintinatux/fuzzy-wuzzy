import React from 'react'
import { searchIcon } from '../styles/SearchIcon.module.scss'

const SearchIcon = () =>
  <svg role="presentation" className={searchIcon} viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
    <circle cx="14" cy="14" r="12" />
    <path d="M23 23 L30 30" />
  </svg>

export default SearchIcon

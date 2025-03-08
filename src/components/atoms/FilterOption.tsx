'use client'
import React from 'react'
import { DropdownMenuCheckboxItem } from '../ui/dropdown-menu'

interface FilterOptionProps {
  label: string
  value: string
  isChecked: boolean
  toggleSelection: (value: string) => void
}

/**
 * Componente FilterOption.
 *
 * Este componente representa um item de um menu suspenso com seleção múltipla (checkbox).
 *
 * @property {string} label - O texto exibido no item da lista de seleção.
 * @property {string} value - O valor único associado ao item.
 * @property {boolean} isChecked - Indica se o item está selecionado ou não.
 * @property {(value: string) => void} toggleSelection - Função para alternar a seleção do item.
 *
 * @returns {JSX.Element} Um item de seleção múltipla estilizado dentro de um `DropdownMenuCheckboxItem`.
 *
 * @example
 * ```tsx
 * <FilterOption
 *   label="Opção 1"
 *   value="option1"
 *   isChecked={true}
 *   toggleSelection={(val) => console.log(val)}
 * />
 * ```
 */

export default function FilterOption({
  label,
  value,
  isChecked,
  toggleSelection,
}: FilterOptionProps) {
  return (
    <DropdownMenuCheckboxItem
      checked={isChecked}
      onCheckedChange={() => toggleSelection(value)}
      onSelect={(e) => e.preventDefault()}
    >
      {label}
    </DropdownMenuCheckboxItem>
  )
}

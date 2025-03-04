import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { Dropdown } from '../molecules/Dropdown'
import { BadgeInfo } from '../atoms/Badge'
import { Button } from '../ui/button'
import { Search, X } from 'lucide-react'

interface SelectedOptions {
  genres: string[]
  year: string[]
  ratings: string[]
  order: string | null
}

const options = [
  { value: 'react', label: 'React' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'tailwind', label: 'Tailwind CSS' },
  { value: 'shadcn', label: 'ShadCN' },
]

export default function Filters() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    genres: [],
    year: [],
    ratings: [],
    order: null,
  })

  const handleGenreChange = (selected: string[]) => {
    setSelectedOptions((prev) => ({ ...prev, genres: selected }))
  }

  const handleYearChange = (selected: string[]) => {
    setSelectedOptions((prev) => ({ ...prev, year: selected }))
  }

  const handleRatingsChange = (selected: string[]) => {
    setSelectedOptions((prev) => ({ ...prev, ratings: selected }))
  }

  const handleOrderChange = (selected: string[]) => {
    setSelectedOptions((prev) => ({ ...prev, order: selected[0] }))
  }

  function removeItemFilter(
    category: keyof SelectedOptions,
    itemToRemove: string
  ) {
    setSelectedOptions((prev) => {
      const updatedItems = Array.isArray(prev[category])
        ? prev[category].filter((item) => item !== itemToRemove)
        : []

      return {
        ...prev,
        [category]: updatedItems,
      }
    })
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="border-2 bg-[#ffffff] dark:bg-[#121217] rounded-xl px-5 py-5 mt-5 transition-all delay-300">
          <section className="flex gap-4" key={'filterOptions'}>
            <Dropdown
              className="w-full px-2"
              options={options}
              multiSelect={true}
              key={'Genres'}
              onChange={handleGenreChange}
              selected={selectedOptions.genres}
            >
              Gênero
            </Dropdown>
            <Dropdown
              className="w-full px-2"
              options={options}
              multiSelect={true}
              key={'Year'}
              onChange={handleYearChange}
              selected={selectedOptions.year}
            >
              Ano
            </Dropdown>
            <Dropdown
              className="w-full px-2"
              options={options}
              multiSelect={true}
              key={'Ratings'}
              onChange={handleRatingsChange}
              selected={selectedOptions.ratings}
            >
              Avaliação
            </Dropdown>
            <Dropdown
              className="w-full px-2"
              options={options}
              key={'Order'}
              onChange={handleOrderChange}
              selected={selectedOptions.order ? [selectedOptions.order] : []}
            >
              Ordenar por
            </Dropdown>
          </section>
          <div className="flex mt-5">
            <section
              className="flex w-full gap-2 overflow-y-auto mr-5"
              key={'filterList'}
            >
              {Object.entries(selectedOptions).map(([category, items]) =>
                Array.isArray(items) && items.length > 0
                  ? items.map((item: string) => (
                      <BadgeInfo
                        fontSize="xs"
                        variant="filter"
                        key={item.toString()}
                      >
                        {item}
                        <Button
                          className="bg-zinc-100 hover:bg-zinc-300 text-black shadow-none rounded-full w-4 h-4 p-0 ml-2"
                          onClick={() =>
                            removeItemFilter(
                              category as keyof SelectedOptions,
                              item
                            )
                          }
                        >
                          <X className="w-[1px] h-[1px]" />
                        </Button>
                      </BadgeInfo>
                    ))
                  : null
              )}
            </section>
            <div className="">
              <Button>
                <Search />
                <span>Buscar</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

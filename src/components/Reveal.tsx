import { useRef, useEffect } from 'react'
import type { JSX } from 'react'

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  delay?: number
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), delay); io.unobserve(el) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  // @ts-expect-error — dynamic tag with ref
  return <Tag ref={ref} className={`fade-up ${className}`} style={style}>{children}</Tag>
}

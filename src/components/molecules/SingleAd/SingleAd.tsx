import { useEffect, useState } from 'react';
import { AdEntity } from '../../../../../advertisement-service-back/types/ad';
import styles from './SingleAd.module.scss'

interface Props {
  id: string;
}

export const SingleAd = ( props: Props) => {
  const [ad, setAd] = useState<AdEntity | null>(null)

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ad/${props.id}`)
      const data = await res.json()
      setAd(data)
    }) ()
  }, [])

  if(ad === null) {
    return <span>Loading...</span>
  }

  return(
    <>
    <h2>{ad.name}</h2>
    <p>{ad.description}</p>
    {ad.price ?? <p>{ad.price} PLN</p>}
    <a href={ad.url} target='_blank'>Open</a>

    </>
  )
}
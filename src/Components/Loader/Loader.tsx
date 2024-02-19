import { CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <div className='h-80 flex justify-center items-center'>
        <CircularProgress color="success" />
    </div>
  )
}

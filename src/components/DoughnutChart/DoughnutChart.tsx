import { useRef, useEffect, FunctionComponent } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  progress: number;
  onlyImage?: boolean;
}

const type = {
  "begin": ['#efdbff', '#9254de'],
  "early": ['#fff7e6', '#ffd591'],
  "middle": ['#fff1f0', '#ff7875'],
  "late": ['#fcffe6', '#bae637'],
  "finish": ['#bae7ff', '#40a9ff'],
}

const DoughnutChart: FunctionComponent<CanvasProps> = (props) => {
  const { width, height, progress, onlyImage } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvasDoughnut = canvasRef.current
    const ctx = canvasDoughnut?.getContext('2d')
    let color: string[] = []
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      if (progress === 0) {
        color = type.begin
      } else if (progress > 0 && progress < 30) {
        color = type.early
      } else if (progress >= 30 && progress < 70) {
        color = type.middle
      } else if (progress >= 70 && progress < 100) {
        color = type.late
      } else if (progress === 100) {
        color = type.finish
      }
      const number = progress / 100 * 2 * Math.PI - 0.5 * Math.PI
      const fontNumber = width * 0.24
      ctx.font = `bold ${fontNumber}px arial`
      ctx.textAlign = "center"
      ctx.textBaseline = 'middle'
      ctx.strokeStyle = color[0]
      ctx.lineWidth = 10
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, Math.min(width / 2 * 0.8, height / 2 * 0.8), number, 1.5 * Math.PI, false)
      ctx.stroke()

      ctx.beginPath()
      ctx.strokeStyle = color[1]
      ctx.arc(width / 2, height / 2, Math.min(width / 2 * 0.8, height / 2 * 0.8), -0.5 * Math.PI, number, false)
      ctx.lineCap = "round"
      ctx.stroke()
      ctx.closePath()
      if (!onlyImage) {
        ctx.fillText(`${progress}%`, width / 2, height / 2)
      }
    }
  }, [canvasRef, width, height, progress, onlyImage]);
  return <canvas ref={canvasRef} height={height} width={width} />
};

DoughnutChart.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  progress: 0,
  onlyImage: false
};

export default DoughnutChart;
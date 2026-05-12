import { useEffect, useRef, useState, useCallback } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#e5e5e5',
    primaryBorderColor: '#2a2a2a',
    lineColor: '#a1a1a6',
    secondaryColor: '#1a1a1a',
    tertiaryColor: '#0f0f0f',
    background: '#0f0f0f',
    mainBkg: '#1a1a1a',
    nodeBorder: '#2a2a2a',
    clusterBkg: '#1a1a1a',
    clusterBorder: '#2a2a2a',
    titleColor: '#e5e5e5',
    edgeLabelBackground: '#1a1a1a',
  },
})

const architectureDiagram = `
graph TB
  subgraph "木安 AI 分身架构"
    direction TB
    
    subgraph "协议层 (Protocol Layer)"
      P1[启动协议]
      P2[结束协议]
      P3[红黄绿灯权限]
      P4[记忆写回协议]
      P5[争论规则]
    end
    
    subgraph "技能层 (Skills Layer)"
      S1[拆JD]
      S2[面试准备]
      S3[项目讲述]
      S4[写cold_message]
      S5[公司调研]
      S6[面试复盘]
    end
    
    subgraph "记忆层 (Memory Layer)"
      M1[当前任务版]
      M2[长期画像]
      M3[反例库]
    end
    
    subgraph "核心身份"
      C1[理性镜像]
      C2[结构化顾问]
      C3[项目共创者]
      C4[复盘教练]
    end
  end

  P1 --> M1
  P1 --> M2
  P3 --> S1
  P3 --> S2
  P3 --> S3
  P3 --> S4
  P3 --> S5
  P3 --> S6
  M1 --> C1
  M2 --> C2
  S1 --> C3
  S2 --> C4
`

const workflowDiagram = `
graph TB
  subgraph "工作流程"
    direction TB
    
    Start([用户开始对话]) --> ReadMemory[读取记忆]
    ReadMemory --> ReadTask[读取当前任务版]
    ReadMemory --> ReadProfile[读取长期画像]
    
    ReadTask --> Mirror[主动观察 Mirror Step]
    ReadProfile --> Mirror
    
    Mirror --> HasTask{用户有明确任务?}
    
    HasTask -->|是| IdentifyType[识别任务类型]
    HasTask -->|否| AskTask[询问今天要推进什么]
    
    IdentifyType --> TypeMatch{任务类型匹配}
    
    TypeMatch -->|求职| JobMode[求职模式]
    TypeMatch -->|项目| ProjectMode[项目模式]
    TypeMatch -->|复盘| ReviewMode[复盘模式]
    TypeMatch -->|情绪| EmotionMode[情绪校准]
    
    JobMode --> Execute[执行任务]
    ProjectMode --> Execute
    ReviewMode --> Execute
    EmotionMode --> Execute
    AskTask --> Execute
    
    Execute --> Complete[任务完成]
    Complete --> AutoProcess[复利工程]
    
    AutoProcess --> Extract[提炼有效做法]
    AutoProcess --> Pitfall[记录踩坑]
    AutoProcess --> WriteBack[写回规则]
    
    Extract --> EndSession[结束对话]
    Pitfall --> EndSession
    WriteBack --> EndSession
    
    EndSession --> SaveMemory[保存记忆]
    SaveMemory --> End([对话结束])
  end
`

function MermaidDiagram({ diagramType }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })

  const renderDiagram = useCallback(async () => {
    if (!containerRef.current) return

    const diagram = diagramType === 'architecture' ? architectureDiagram : workflowDiagram
    
    try {
      const { svg: renderedSvg } = await mermaid.render(
        `diagram-${diagramType}-${Date.now()}`,
        diagram
      )
      
      // 清空容器并插入SVG
      containerRef.current.innerHTML = ''
      const wrapper = document.createElement('div')
      wrapper.className = 'mermaid-content'
      wrapper.innerHTML = renderedSvg
      
      // 确保SVG有正确的viewBox
      const svgElement = wrapper.querySelector('svg')
      if (svgElement) {
        svgElement.style.width = '100%'
        svgElement.style.height = 'auto'
        svgElement.style.minWidth = '500px'
      }
      
      containerRef.current.appendChild(wrapper)
      
      // 重置缩放和位置
      setScale(1)
      setPosition({ x: 0, y: 0 })
    } catch (error) {
      console.error('Mermaid rendering error:', error)
      containerRef.current.innerHTML = '<p>Error rendering diagram</p>'
    }
  }, [diagramType])

  useEffect(() => {
    renderDiagram()
  }, [renderDiagram])

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.3))
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setScale(prev => Math.min(Math.max(prev + delta, 0.3), 3))
  }

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsDragging(true)
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const isWorkflow = diagramType === 'workflow'

  return (
    <div className="mermaid-wrapper">
      {isWorkflow && (
        <div className="zoom-controls">
          <button className="zoom-btn" onClick={handleZoomOut} title="缩小">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="8" x2="12" y2="8"></line>
            </svg>
          </button>
          <span className="zoom-level">{Math.round(scale * 100)}%</span>
          <button className="zoom-btn" onClick={handleZoomIn} title="放大">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="4" x2="8" y2="12"></line>
              <line x1="4" y1="8" x2="12" y2="8"></line>
            </svg>
          </button>
          <button className="zoom-btn" onClick={handleReset} title="重置">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 2h12v12H2z"></path>
              <path d="M8 5v6M5 8h6"></path>
            </svg>
          </button>
        </div>
      )}
      <div 
        className={`mermaid-container ${isWorkflow ? 'mermaid-container--zoomable' : ''}`}
        onWheel={isWorkflow ? handleWheel : undefined}
        onMouseDown={isWorkflow ? handleMouseDown : undefined}
        onMouseMove={isWorkflow ? handleMouseMove : undefined}
        onMouseUp={isWorkflow ? handleMouseUp : undefined}
        onMouseLeave={isWorkflow ? handleMouseUp : undefined}
        style={{
          cursor: isWorkflow ? (isDragging ? 'grabbing' : 'grab') : 'default',
          transform: isWorkflow ? `scale(${scale})` : undefined,
          transformOrigin: 'top left'
        }}
      >
        <div ref={containerRef} className="mermaid-content" />
      </div>
    </div>
  )
}

export default MermaidDiagram

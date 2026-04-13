export function SkillsContent() {
  return (
    <div className="font-mono text-sm">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">//</span>
        <span>skills.config.js</span>
      </div>

      <pre className="code-block">
        <code>
          <span className="syntax-comment">// skills.config.js</span>{"\n"}
          <span className="syntax-keyword">module.exports</span> = {"{"}{"\n"}
          {"  "}<span className="syntax-property">cloudPlatforms</span>: [{"\n"}
          {"    "}<span className="syntax-string">"AWS"</span>,{"\n"}
          {"    "}<span className="syntax-string">"NCP"</span>{"\n"}
          {"  "}],{"\n\n"}
          
          {"  "}<span className="syntax-property">containerOrchestration</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Docker"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Kubernetes"</span>,{"\n"}
          {"    "}<span className="syntax-string">"ECS"</span>,{"\n"}
          {"    "}<span className="syntax-string">"EKS"</span>{"\n"}
          {"  "}],{"\n\n"}
          
          {"  "}<span className="syntax-property">iacAutomation</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Terraform"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Jenkins"</span>,{"\n"}
          {"    "}<span className="syntax-string">"GitHub Actions"</span>{"\n"}
          {"  "}],{"\n\n"}
          
          {"  "}<span className="syntax-property">monitoringLogging</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Prometheus"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Grafana"</span>{"\n"}
          {"  "}],{"\n\n"}
          
          {"  "}<span className="syntax-property">scriptingProgramming</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Python"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Bash"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Node.js"</span>{"\n"}
          {"  "}],{"\n\n"}
          
          {"  "}<span className="syntax-property">frontend</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Next.js"</span>,{"\n"}
          {"    "}<span className="syntax-string">"TypeScript"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Tailwind CSS"</span>{"\n"}
          {"  "}]{"\n"}
          {"}"};
        </code>
      </pre>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 border border-accent/30 rounded">
          <div className="text-accent text-xs mb-2">$ echo $EXPERTISE_LEVEL</div>
          <div className="text-foreground">Intermediate</div>
        </div>
        <div className="p-4 border border-accent/30 rounded">
          <div className="text-accent text-xs mb-2">$ uptime</div>
          <div className="text-foreground">Learning since 2021</div>
        </div>
      </div>
    </div>
  );
}

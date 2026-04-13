export function AboutContent() {
  return (
    <div className="font-mono text-sm">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">//</span>
        <span>about.json</span>
      </div>

      <pre className="code-block">
        <code>
          <span className="syntax-keyword">{"{"}</span>{"\n"}
          {"  "}<span className="syntax-property">"name"</span>: <span className="syntax-string">"동건"</span>,{"\n"}
          {"  "}<span className="syntax-property">"role"</span>: <span className="syntax-string">"Cloud Engineer"</span>,{"\n"}
          {"  "}<span className="syntax-property">"status"</span>: <span className="syntax-string">"Student"</span>,{"\n"}
          {"  "}<span className="syntax-property">"location"</span>: <span className="syntax-string">"South Korea"</span>,{"\n"}
          {"  "}<span className="syntax-property">"interests"</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Cloud Native Architecture"</span>,{"\n"}
          {"    "}<span className="syntax-string">"DevOps Culture"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Infrastructure Automation"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Container Orchestration"</span>{"\n"}
          {"  "}],{"\n"}
          {"  "}<span className="syntax-property">"learning"</span>: [{"\n"}
          {"    "}<span className="syntax-string">"AWS & NCP"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Docker & Kubernetes"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Terraform & Ansible"</span>,{"\n"}
          {"    "}<span className="syntax-string">"CI/CD Pipelines"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Monitoring & Logging"</span>{"\n"}
          {"  "}],{"\n"}
          {"  "}<span className="syntax-property">"goals"</span>: [{"\n"}
          {"    "}<span className="syntax-string">"Cloud Certifications (AWS SAA, CKA)"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Open Source Contributions"</span>,{"\n"}
          {"    "}<span className="syntax-string">"Real-world DevOps Experience"</span>{"\n"}
          {"  "}]{"\n"}
          <span className="syntax-keyword">{"}"}</span>
        </code>
      </pre>

      <div className="mt-6 p-4 border border-border rounded">
        <div className="text-accent text-xs mb-2">$ cat bio.txt</div>
        <p className="text-foreground leading-relaxed">
          안정적이고 확장 가능한 클라우드 인프라 구축에 관심을 가지고 열심히 공부하고 있습니다.
          AWS, NCP 등 다양한 클라우드 플랫폼을 학습하며 실습 프로젝트를 진행하고 있습니다.
          DevOps와 자동화에 대해 배우며, 실무에서 활용할 수 있는 기술을 익히기 위해 노력하고 있습니다.
        </p>
      </div>
    </div>
  );
}

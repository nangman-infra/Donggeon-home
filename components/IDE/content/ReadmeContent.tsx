"use client";

import { useEffect, useState } from "react";

export function ReadmeContent() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `$ whoami
> 동건 (Donggeon)

$ cat introduction.txt
안녕하세요! 클라우드 인프라 엔지니어를 꿈꾸는 학생입니다.
안정적이고 확장 가능한 클라우드 인프라 구축에 관심을 가지고 있습니다.

$ ls -la skills/
drwxr-xr-x  cloud-platforms/
drwxr-xr-x  container-orchestration/
drwxr-xr-x  iac-automation/
drwxr-xr-x  monitoring-logging/

$ echo $CURRENT_FOCUS
"DevOps와 자동화를 통해 더 나은 개발 경험을 만들어가고 있습니다."

$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm space-y-4">
      <div className="flex items-center gap-2 text-muted-foreground mb-6">
        <span className="line-numbers">1</span>
        <span className="text-accent">#</span>
        <span>README.md</span>
      </div>

      <pre className="whitespace-pre-wrap leading-relaxed">
        <code className="text-foreground">
          {displayedText}
          <span className="typing-cursor"></span>
        </code>
      </pre>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="code-block">
            <div className="text-accent text-xs mb-2">PROJECTS</div>
            <div className="text-2xl font-bold">06+</div>
          </div>
          <div className="code-block">
            <div className="text-accent text-xs mb-2">CERTS</div>
            <div className="text-2xl font-bold">05+</div>
          </div>
          <div className="code-block">
            <div className="text-accent text-xs mb-2">YEAR</div>
            <div className="text-2xl font-bold">2025</div>
          </div>
          <div className="code-block">
            <div className="text-accent text-xs mb-2">STATUS</div>
            <div className="text-sm text-accent">Learning</div>
          </div>
        </div>
      </div>
    </div>
  );
}

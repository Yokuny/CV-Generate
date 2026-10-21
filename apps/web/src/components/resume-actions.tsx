// TODO: processo para fazer edição e gestão via interface (Import e Save desativados: hoje a edição é feita pelos arquivos/IA)
// import { ArrowDownToLine, ArrowUpFromLine, LoaderCircle, Save } from 'lucide-react';
// import { type ComponentProps, type ReactNode, useRef } from 'react';
// import { useShallow } from 'zustand/react/shallow';
// import { selectDeleting, selectDirty, selectHasVersion, useResumes } from '@/store/resumes';
import { ArrowDownToLine } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { selectHasVersion, useResumes } from '@/store/resumes';

function ActionButton({ label, icon, ...props }: ComponentProps<typeof Button> & { label: string; icon: ReactNode }) {
  return (
    <Button variant="ghost" size="sm" aria-label={label} {...props}>
      {icon}
      <span className="button-label">{label}</span>
    </Button>
  );
}

export function ResumeActions() {
  // TODO: processo para fazer edição e gestão via interface
  // const { saving, importMarkdown, exportSources, save } = useResumes(
  //   useShallow(({ saving, importMarkdown, exportSources, save }) => ({
  //     saving,
  //     importMarkdown,
  //     exportSources,
  //     save,
  //   })),
  // );
  const exportSources = useResumes((s) => s.exportSources);
  const disabled = useResumes((s) => !s.ready || !selectHasVersion(s));
  // TODO: processo para fazer edição e gestão via interface
  // const deleting = useResumes(selectDeleting);
  // const canSave = useResumes((s) => s.writable && selectDirty(s));
  // const importRef = useRef<HTMLInputElement>(null);
  return (
    <div className="header-actions">
      <ButtonGroup className="action-group" aria-label="Resume actions">
        {/* TODO: processo para fazer edição e gestão via interface
        <ActionButton
          label="Import"
          title="Import Markdown"
          icon={<ArrowUpFromLine />}
          onClick={() => importRef.current?.click()}
          disabled={disabled || deleting}
        />
        */}
        <ActionButton
          label="Download"
          title="Download source files"
          icon={<ArrowDownToLine />}
          onClick={exportSources}
          disabled={disabled}
        />
        {/* TODO: processo para fazer edição e gestão via interface
        <ActionButton
          label="Save"
          title="Salvar agora (no modo local, as edições também são salvas automaticamente)"
          icon={<span className="inline-flex">{saving ? <LoaderCircle className="animate-spin" /> : <Save />}</span>}
          onClick={save}
          disabled={disabled || !canSave || saving || deleting}
        />
        */}
        <ActionButton
          className="ml-1 rounded-md! shadow-none!"
          variant="default"
          label="Export"
          title="Export PDF"
          icon={<ArrowDownToLine />}
          onClick={() => window.print()}
          disabled={disabled}
        />
      </ButtonGroup>
      {/* TODO: processo para fazer edição e gestão via interface
      <input
        ref={importRef}
        type="file"
        accept=".md,text/markdown"
        className="hidden"
        aria-label="Importar arquivo Markdown"
        onChange={(e) => {
          void importMarkdown(e.target.files?.[0]);
          e.target.value = '';
        }}
      />
      */}
    </div>
  );
}

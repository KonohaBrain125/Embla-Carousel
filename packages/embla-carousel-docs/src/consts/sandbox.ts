import { EmblaOptionsType } from 'embla-carousel-react'
import { SPACINGS } from './spacings'
import {
  PackageJson as BasePackageJsonType,
  TsConfigJson as TsConfigType
} from 'type-fest'

export type PackageJsonType = BasePackageJsonType & {
  browserslist?: string[]
}

export type { TsConfigType }

export type SandboxConfigType = {
  files: {
    [key: string]: {
      content: string
      isBinary: boolean
    }
  }
}

export type SandboxModuleType = { default: string }

export type SandboxVanillaExtensionType = 'js' | 'ts'

export type SandboxReactExtensionType = 'jsx' | 'tsx'

export type SandboxPluginNameType =
  typeof SANDBOX_PLUGINS[keyof typeof SANDBOX_PLUGINS]

export type SandboxLanguageType =
  typeof SANDBOX_LANGUAGES[keyof typeof SANDBOX_LANGUAGES]

export type SandboxPluginsType = {
  [key in SandboxPluginNameType]?: string
}

export type SandboxSharedCreateType = {
  id: string
  options: EmblaOptionsType
  styles: string
  plugins?: SandboxPluginsType
  language?: SandboxLanguageType
  sandboxOverrides?: SandboxConfigType['files']
}

export type SandboxVanillaCreateType = SandboxSharedCreateType & {
  carouselScript: string
  carouselHtml: string
}

export type SandboxReactCreateType = SandboxSharedCreateType & {
  carouselScript: string
  slides: number[]
  indexScript?: string
}

export type SandboxSelectionType<SettingsType = undefined> = {
  key: SandboxLabelKeyType
  label: SandboxLabelValueType
  createSandbox: (settings?: SettingsType) => Promise<string>
}

export type SandboxLabelValueType = typeof SANDBOX_LABELS[SandboxLabelKeyType]
export type SandboxLabelKeyType = keyof typeof SANDBOX_LABELS
export type SandboxCreateFunctionType<SettingsType> =
  SandboxSelectionType<SettingsType>['createSandbox']

export const SANDBOX_LABELS = <const>{
  VANILLA_JS: 'Vanilla',
  VANILLA_TS: 'Vanilla + TypeScript',
  REACT_TS: 'React + TypeScript',
  REACT_JS: 'React'
}

export const SANDBOX_LANGUAGES = <const>{
  JAVASCRIPT: 'javascript',
  TYPESCRIPT: 'typescript'
}

export const SANDBOX_PLUGINS = <const>{
  AUTOPLAY: 'embla-carousel-autoplay',
  CLASS_NAMES: 'embla-carousel-class-names'
}

export const SANDBOX_SELECTION_SPACING = SPACINGS.ONE

export const SANDBOX_REGEX_REPOSITORY_URL =
  /__replace_sandbox_repository_url__/g

export const SANDBOX_REGEX_TITLE = /__replace_sandbox_title__/g

export const SANDBOX_REGEX_THEME = /__replace_sandbox_theme__/g

export const SANDBOX_REGEX_OPTIONS = /const\sOPTIONS(.*)/

export const SANDBOX_REGEX_IOS_PICKER_LOOP = /const\sLOOP\s=\sfalse/

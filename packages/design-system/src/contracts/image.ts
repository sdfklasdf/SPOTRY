export type ImageLoadState = 'idle' | 'loading' | 'loaded' | 'error';
export type ImageContext = 'editorial' | 'real_provider' | 'real_facility' | 'real_session';

export interface ImagePolicyInput {
  context: ImageContext;
  hasRealSource: boolean;
}

export interface ImagePolicyResult {
  canRenderEditorialFallback: boolean;
  documentaryLabelRequired: boolean;
}

export function imagePolicy(input: ImagePolicyInput): ImagePolicyResult {
  if (input.context === 'editorial') {
    return { canRenderEditorialFallback: true, documentaryLabelRequired: false };
  }
  if (input.hasRealSource) {
    return { canRenderEditorialFallback: false, documentaryLabelRequired: false };
  }
  return { canRenderEditorialFallback: false, documentaryLabelRequired: true };
}

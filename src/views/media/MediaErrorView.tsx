import { MWMediaMeta } from "@/backend/metadata/types";
import { ErrorMessage } from "@/components/layout/ErrorBoundary";
import { Link } from "@/components/text/Link";
import { useGoBack } from "@/hooks/useGoBack";
import { conf } from "@/setup/config";
import { VideoPlayerHeader } from "@/video/components/parts/VideoPlayerHeader";
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "react-i18next";

export function MediaFetchErrorView() {
  const { t } = useTranslation()
  const goBack = useGoBack();

  return (
    <div className="h-screen flex-1">
      <Helmet>
        <title>{t("media.errors.failedMeta")}</title>
      </Helmet>
      <div className="fixed inset-x-0 top-0 py-6 px-8">
        <VideoPlayerHeader onClick={goBack} />
      </div>
      <ErrorMessage>
        <p className="my-6 max-w-lg">
          {t("media.errors.mediaFailed")}
        </p>
      </ErrorMessage>
    </div>
  );
}

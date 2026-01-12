import { render, screen } from "@testing-library/react";
import React from "react";
import { VideoPlaceholder } from "../VideoPlaceholder";

/**
 * VideoPlaceholder Component Tests
 * Tests for Task Group 7: Video Placeholder Implementation
 *
 * Test 1: VideoPlaceholder renders with title and accessible play button
 * Test 2: VideoPlaceholder displays "Video coming soon" when no thumbnail
 */

describe("VideoPlaceholder", () => {
  it("renders with title and accessible play button", () => {
    render(
      <VideoPlaceholder
        title="Space Camp Hall of Fame Induction"
        thumbnailSrc="/images/test-thumbnail.jpg"
      />
    );

    // Title should be rendered
    expect(
      screen.getByText("Space Camp Hall of Fame Induction")
    ).toBeInTheDocument();

    // Play button should be accessible with aria-label
    const playButton = screen.getByRole("button", {
      name: /play video: space camp hall of fame induction/i,
    });
    expect(playButton).toBeInTheDocument();
    expect(playButton).toHaveAttribute("aria-label");
  });

  it('displays "Video coming soon" when no thumbnail provided', () => {
    render(<VideoPlaceholder title="Upcoming Video" />);

    // Should show placeholder text when no thumbnail
    expect(screen.getByText("Video coming soon")).toBeInTheDocument();

    // Title should still be rendered
    expect(screen.getByText("Upcoming Video")).toBeInTheDocument();

    // Play button should still be accessible
    const playButton = screen.getByRole("button", {
      name: /play video: upcoming video/i,
    });
    expect(playButton).toBeInTheDocument();
  });
});

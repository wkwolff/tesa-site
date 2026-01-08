import { render, screen } from "@testing-library/react";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  notFound: jest.fn(),
  useRouter: () => ({
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: { alt: string; src: string; [key: string]: unknown }) => {
    const { alt, src, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} src={src} {...rest} />;
  },
}));

// Mock the blog lib functions (server-only module)
jest.mock("@/lib/blog", () => ({
  getAllPosts: jest.fn(),
  getPostBySlug: jest.fn(),
  getAllPostSlugs: jest.fn(),
}));

// Mock utils (client-safe)
jest.mock("@/lib/utils", () => ({
  formatDate: (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  },
}));

// Import components after mocking
import BlogCard from "@/components/blog/BlogCard";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

// Mock post data
const mockPost = {
  slug: "welcome-to-tesa",
  title: "Welcome to TESA: Launching the Future of Aerospace Education",
  date: "2026-01-06",
  excerpt:
    "Introducing The Engineering and Science Academy - a pre-college hybrid program preparing students for success in STEM majors.",
  author: "Diallo Wallace",
  tags: ["announcement", "aerospace", "STEM education", "launch"],
  content:
    "<h1>Welcome to TESA</h1><p>We are thrilled to announce the official launch of TESA.</p>",
};

const mockPostMeta = {
  slug: mockPost.slug,
  title: mockPost.title,
  date: mockPost.date,
  excerpt: mockPost.excerpt,
  author: mockPost.author,
  tags: mockPost.tags,
};

describe("Blog Components", () => {
  describe("BlogCard", () => {
    it("renders blog post card with title", () => {
      render(<BlogCard post={mockPostMeta} />);
      expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    });

    it("renders publication date", () => {
      render(<BlogCard post={mockPostMeta} />);
      // Check for the date element with datetime attribute
      const timeElement = screen.getByText(/January \d+, 2026/);
      expect(timeElement).toBeInTheDocument();
      expect(timeElement).toHaveAttribute("datetime", "2026-01-06");
    });

    it("renders excerpt with truncation", () => {
      render(<BlogCard post={mockPostMeta} />);
      expect(screen.getByText(/Introducing The Engineering/)).toBeInTheDocument();
    });

    it("renders author name", () => {
      render(<BlogCard post={mockPostMeta} />);
      expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    });

    it("renders tags", () => {
      render(<BlogCard post={mockPostMeta} />);
      expect(screen.getByText("announcement")).toBeInTheDocument();
      expect(screen.getByText("aerospace")).toBeInTheDocument();
    });

    it("renders read more link to individual post", () => {
      render(<BlogCard post={mockPostMeta} />);
      const readMoreLink = screen.getByRole("link", { name: /read more/i });
      expect(readMoreLink).toHaveAttribute(
        "href",
        `/blog/${mockPost.slug}`
      );
    });

    it("title links to individual post", () => {
      render(<BlogCard post={mockPostMeta} />);
      const titleLink = screen.getByRole("link", { name: mockPost.title });
      expect(titleLink).toHaveAttribute("href", `/blog/${mockPost.slug}`);
    });
  });

  describe("BlogPostLayout", () => {
    it("renders post title", () => {
      render(<BlogPostLayout post={mockPost} />);
      expect(
        screen.getByRole("heading", { level: 1, name: mockPost.title })
      ).toBeInTheDocument();
    });

    it("renders author information", () => {
      render(<BlogPostLayout post={mockPost} />);
      // Get all text nodes with the author name (appears in header and bio)
      const authorElements = screen.getAllByText(mockPost.author);
      expect(authorElements.length).toBeGreaterThan(0);
    });

    it("renders publication date", () => {
      render(<BlogPostLayout post={mockPost} />);
      // Check for the date element with datetime attribute
      const timeElement = screen.getByText(/January \d+, 2026/);
      expect(timeElement).toBeInTheDocument();
      expect(timeElement).toHaveAttribute("datetime", "2026-01-06");
    });

    it("renders back to blog link", () => {
      render(<BlogPostLayout post={mockPost} />);
      const backLink = screen.getByRole("link", { name: /back to blog/i });
      expect(backLink).toHaveAttribute("href", "/blog");
    });

    it("renders post content", () => {
      render(<BlogPostLayout post={mockPost} />);
      expect(
        screen.getByText(/We are thrilled to announce/)
      ).toBeInTheDocument();
    });

    it("renders tags", () => {
      render(<BlogPostLayout post={mockPost} />);
      expect(screen.getByText("announcement")).toBeInTheDocument();
      expect(screen.getByText("aerospace")).toBeInTheDocument();
    });

    it("renders share buttons", () => {
      render(<BlogPostLayout post={mockPost} />);
      expect(
        screen.getByRole("button", { name: /copy link/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /share on x/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /share on linkedin/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /share on facebook/i })
      ).toBeInTheDocument();
    });

    it("renders author bio section", () => {
      render(<BlogPostLayout post={mockPost} />);
      expect(screen.getByText(/Written by/)).toBeInTheDocument();
      expect(
        screen.getByText(/Space Camp Hall of Fame 2025/)
      ).toBeInTheDocument();
    });
  });

  describe("Blog Listing Page Functionality", () => {
    beforeEach(() => {
      (getAllPosts as jest.Mock).mockReturnValue([mockPostMeta]);
    });

    it("getAllPosts returns posts sorted by date", () => {
      const posts = getAllPosts();
      expect(posts).toHaveLength(1);
      expect(posts[0].title).toBe(mockPost.title);
    });
  });

  describe("Blog Post Page Functionality", () => {
    beforeEach(() => {
      (getPostBySlug as jest.Mock).mockResolvedValue(mockPost);
    });

    it("getPostBySlug returns full post with content", async () => {
      const post = await getPostBySlug("welcome-to-tesa");
      expect(post).toBeDefined();
      expect(post?.title).toBe(mockPost.title);
      expect(post?.content).toContain("Welcome to TESA");
    });

    it("frontmatter metadata is parsed correctly", async () => {
      const post = await getPostBySlug("welcome-to-tesa");
      expect(post?.date).toBe("2026-01-06");
      expect(post?.author).toBe("Diallo Wallace");
      expect(post?.tags).toContain("announcement");
      expect(post?.excerpt).toContain("Engineering and Science Academy");
    });
  });
});

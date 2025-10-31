# How to Request Copilot Code Review

## Quick Start

When you create a Pull Request, GitHub Copilot will automatically see your changes. To get a comprehensive code review, follow these steps:

## Step 1: Create Your Pull Request

```bash
# Make sure you're on your feature branch
git checkout bugfix-01

# Push your changes
git push origin bugfix-01

# Create PR on GitHub
# Go to: https://github.com/kejian-tong/kejian-tong.github.io/compare
```

## Step 2: Use the PR Template

When creating your PR, the template will automatically populate. Fill in the relevant sections:

- Check the appropriate "Type of Change" boxes
- List your changes in the "Changes Summary"
- Mark completed items in the "Testing Completed" section
- Note any known issues

## Step 3: Request Copilot Review

In your PR description or as a comment, use one of these commands:

### Option A: Comprehensive Review (Recommended)

```
@github-copilot Please review this PR following the guidelines in .github/instructions/copilot-code-review.md

Focus on:
1. Animation performance
2. Navigation functionality
3. Accessibility compliance
4. Code quality and maintainability
```

### Option B: Specific Area Review

```
@github-copilot Please review the animation implementations in:
- src/app/components/sections/projects.tsx
- src/app/components/ui/animated-background.tsx

Check for performance issues and best practices.
```

### Option C: Quick Review

```
@github-copilot Please do a quick review focusing on critical issues and bugs.
```

## Step 4: Review Copilot's Feedback

Copilot will respond with:

- 🔴 **Critical Issues**: Must fix before merging
- 🟡 **Important Improvements**: Should address
- 🟢 **Suggestions**: Nice to have
- ✅ **Good Practices**: What's done well

## Step 5: Address Feedback

For each issue:

1. **Critical** → Fix immediately
2. **Important** → Fix or explain why not needed
3. **Suggestions** → Decide if worth implementing

Reply to Copilot's comments to get clarification:

```
@github-copilot Can you explain why this is a performance concern?
```

```
@github-copilot Can you show an example of how to fix this?
```

## Advanced Usage

### Ask for Specific Reviews

**Performance Review**:

```
@github-copilot Review animation performance. Check for:
- 60fps maintenance
- GPU acceleration
- Unnecessary re-renders
```

**Accessibility Review**:

```
@github-copilot Review accessibility. Check for:
- Keyboard navigation
- ARIA labels
- Color contrast
- Screen reader compatibility
```

**Security Review**:

```
@github-copilot Check for security issues:
- External link security
- Input validation
- Environment variable exposure
```

### Get Code Suggestions

```
@github-copilot This animation feels janky. Can you suggest a better implementation?
```

```
@github-copilot How can I optimize this component for better performance?
```

### Compare Approaches

```
@github-copilot Which is better for this use case:
A) Current implementation with framer-motion
B) CSS animations with transition

Consider performance and maintainability.
```

## Example PR Review Request

Here's a complete example:

```markdown
## PR Ready for Review

@github-copilot Please review this PR following `.github/instructions/copilot-code-review.md`

### Context

This PR adds scroll animations and fixes navigation bugs.

### Focus Areas

1. **Animation Performance**: Check if animations are smooth (60fps)
2. **Navigation**: Verify cross-page navigation works correctly
3. **Accessibility**: Ensure keyboard navigation and screen readers work
4. **Code Quality**: Check for duplication and optimization opportunities

### Specific Concerns

- Are the animated gradients in Hero section too resource-intensive?
- Is the z-index hierarchy correct for navbar?
- Should I add `prefers-reduced-motion` media query?

### Questions

- Is there a better pattern for the navigation fix?
- Any performance improvements you'd suggest?
```

## Tips for Better Reviews

1. **Be Specific**: Point Copilot to specific files or functions
2. **Provide Context**: Explain what you're trying to achieve
3. **Ask Questions**: Don't just ask for review, ask for suggestions
4. **Iterate**: Have a conversation with Copilot to refine solutions
5. **Reference Guidelines**: Point to the review instructions for comprehensive feedback

## Common Review Commands

| Command                                    | Purpose                           |
| ------------------------------------------ | --------------------------------- |
| `@github-copilot review`                   | General code review               |
| `@github-copilot review for performance`   | Performance-focused review        |
| `@github-copilot review for accessibility` | Accessibility review              |
| `@github-copilot review for security`      | Security review                   |
| `@github-copilot explain this code`        | Get explanation of complex code   |
| `@github-copilot suggest improvements`     | Get improvement suggestions       |
| `@github-copilot compare approaches`       | Compare different implementations |

## After Review

1. ✅ Address critical issues
2. 📝 Create follow-up issues for suggestions
3. 💬 Reply to Copilot's comments with fixes
4. 🔄 Re-request review after changes:
   ```
   @github-copilot I've addressed your feedback. Please review the changes.
   ```

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)
- [Web Performance Guidelines](https://web.dev/performance/)
- [Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember**: Copilot is a tool to help you, not replace your judgment. Use its suggestions as guidance, but make final decisions based on your project's needs.

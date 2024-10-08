import React, { useEffect } from 'react'
import './News.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogsHome } from '../../../../Features/Blog/BlogSlice'
import { storage_url } from '../../../../Utils/baseUrl'
import { formatDateTimeFull } from '../../../../Utils/format'
import SkeletonNewCard from './SkeletonNewCard'

const News = () => {
  const dispatch = useDispatch()

  const { blogsHome, isLoading } = useSelector(state => state.blog)

  useEffect(() => {
    dispatch(getBlogsHome())
  }, [dispatch])

  return (
    <div className="news-section padding-x-default padding-y-default">
      <h2>
        <span className="title-part1">Tin tức</span>
        <span className="title-part2"> nổi bật</span>
      </h2>
      <div className="news-items">
        {isLoading ? (
          <SkeletonNewCard amount={3}/>
        ) : blogsHome?.length > 0 ? (
          blogsHome.map(newsItem => (
            <div className="news-item card-news" key={newsItem.id}>
              <Link to={`/tin-tuc/${newsItem.slug}`}>
                <div className="news-image">
                  <img
                    src={`${storage_url}/${newsItem.image}`}
                    alt={newsItem.title}
                  />
                  <span className="date">
                    {formatDateTimeFull(newsItem.created_at)}
                  </span>
                </div>
              </Link>
              <div className="card-body">
                <h3>{newsItem.title}</h3>
                <p>{newsItem.description}</p>
                <p>Tác giả: {newsItem.author}</p>
              </div>
              <div className="card-footer">
                <Link to={`/tin-tuc/${newsItem.slug}`}>Đọc tiếp</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="news-empty">Không có dữ liệu</p>
        )}
      </div>
      <Link to="/tin-tuc" className="view-more">
        Xem thêm
      </Link>
    </div>
  )
}

export default News
